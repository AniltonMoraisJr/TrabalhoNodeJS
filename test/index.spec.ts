import server from '../src/server';
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiJsonSchema from 'chai-json-schema';
import {migrator, seeder} from '../umzug';

chai
    .use(chaiHttp)
    .use(chaiJsonSchema);

const { expect, should } = chai;

const resetDataBase = async () => {
    console.log('Reseting database');
    await migrator.down();
    await migrator.up();
    await seeder.down();
    await seeder.up();
} 

before(function (done) {
    resetDataBase().then(done);
});

export {
    chai,
    server,
    expect,
    should
}