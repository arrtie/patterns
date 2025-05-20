/** @format */

import Observer from "./Observer.js";

// Subject Interface
interface ISubject<T> {
  attach(observer: Observer<T>): void;
  detach(observer: Observer<T>): void;
  notify(eventType: T): void;
}

export default class Subject<T> implements ISubject<T> {
  private observers: Observer<T>[] = [];

  public attach(observer: Observer<T>) {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.warn("Observer has been attached already.");
    }
    this.observers.push(observer);
  }

  public detach(observer: Observer<T>) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.warn("Observer is not attached");
    }
    this.observers.splice(observerIndex, 1);
  }

  public notify(eventType: T) {
    this.observers.forEach((observer) => observer.update(eventType));
  }
}
