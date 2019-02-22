import {
    createStore,
    applyMiddleware,
    compose} from 'redux';
import rootPath from './reducers';

/**
 * Cria o store que faz o transporte das informações do recucers(na pasta , no caso ela lê o index).
 */
export default (initialState) => {
    // return createStore(rootPath, initialState);
    return createStore(rootPath, initialState, compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};
