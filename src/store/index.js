import { createStore } from 'vuex';
import { postModule } from './post';

export default createStore({
    modules: {
        post: postModule
    }
});
