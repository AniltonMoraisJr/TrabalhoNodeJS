import { DataType } from 'sequelize-typescript';
import { CustomerModel } from '../src/api/customer/customer-type';
import { Migration } from '../umzug';

export const up: Migration = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().createTable<CustomerModel>('customer', {
        uuid: {
            field: 'uuid',
            primaryKey: true,
            allowNull: false,
            type: DataType.UUID
        },
        name: {
            field: 'name',
            type: DataType.STRING(100),
            allowNull: false
        },
        cpf: {
            field: 'cpf',
            type: DataType.STRING(11),
            allowNull: true,
            unique: true
        },
        cnpj: {
            field: 'cnpj',
            type: DataType.STRING(14),
            allowNull: true,
            unique: true
        },
        email: {
            field: 'email',
            type: DataType.STRING(100),
            allowNull: false,
            unique: true
        },
        phone: {
            field: 'phone',
            type: DataType.STRING(15),
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            type: DataType.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataType.DATE,
            allowNull: false
        }
    });
};

export const down: Migration = async ({ context: sequelize }) => {
    await sequelize.getQueryInterface().dropTable('customer');
};