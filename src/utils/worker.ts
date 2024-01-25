onmessage = (event: MessageEvent) => {
  const { data } = event;
  console.log(data);
  postMessage('Hello from Web Worker!');
};
