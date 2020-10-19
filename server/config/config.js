/*======================
=========PUERTO=========
======================*/

process.env.PORT = process.env.PORT || 3000;

/*======================
=========Entorno========
======================*/

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*======================
==Expiración de token===
======================*/
// 60 segundos * 60 minutos etc.
process.env.TOKEN_EXP = '1h';

/*======================
=====SEED del token=====
======================*/
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'development_seed';


/*======================
===========DB===========
======================*/

let urlDB;

// if (process.env.NODE_ENV === 'dev')
urlDB = 'mongodb://localhost:27017/registro';
// else
// urlDB = process.env.MONGO_URI;

process.env.URLDB = urlDB;

/*=============================================
                Google CLIENT_ID
=============================================*/
// process.env.CLIENT_ID = process.env.CLIENT_ID || '24718530128-aqani69pjhm5m7bka6sbplot28gtjkbs.apps.googleusercontent.com';