let state = reactive({message: 'Hello Universe'});

render('#container', `<h1>${state.message}</h1>`);

setTimeout(() => {
    state.message = 'Hello World'
  }, 1000);