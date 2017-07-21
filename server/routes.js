import userRoute from './api/user';
import authRoute from './api/auth';
import boardRoute from './api/board';

import path from 'path'; 

export default function(app) {

    app.use('/api/board', boardRoute);
    app.use('/api/users', userRoute);
    app.use('/api/auth', authRoute);

};
