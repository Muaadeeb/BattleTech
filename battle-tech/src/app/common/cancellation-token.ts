import { Observable } from "rxjs";

export interface ICancellationToken {
  merge(other: ICancellationToken | Observable<any>): ICancellationToken;
  toObservable(): Observable<any>;
  isCanceled(): boolean;
}

export class CancellationToken implements ICancellationToken {
  private readonly observable: Observable<any>;
  private $isCanceled = false;

  constructor(observable: Observable<any>) {
    this.observable = observable.map(value => {
      this.$isCanceled = true;
      return value;
    });
  }

  isCanceled(): boolean {
    return this.$isCanceled;
  }

  merge(other: ICancellationToken | Observable<any>): ICancellationToken {
    if (other === this) {
      return this;
    }

    const otherToken = other as ICancellationToken;
    const otherObservable = otherToken
                              ? otherToken.toObservable()
                              : other as Observable<any>;

    return new CancellationToken(this.observable.merge(otherObservable));
  }

  toObservable(): Observable<any> {
    return this.observable;
  }
}
