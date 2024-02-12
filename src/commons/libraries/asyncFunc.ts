import type { FormEvent } from "react";

export const wrapAsyncFunc = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAsyncFunc =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };
