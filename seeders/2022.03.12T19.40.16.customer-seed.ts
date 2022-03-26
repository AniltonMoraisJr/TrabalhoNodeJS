import { Seeder } from "../umzug";

const seedCustomers = [
	{
		uuid: '27456bb4-d1f2-4e88-a546-7eeb2eaa1f6b',
		name: 'John Doe',
		email: 'johndoe@email.com',
		cpf: '99999999991',
		created_at: new Date(),
		updated_at: new Date()
	},
	{
		uuid: 'c7402301-427f-40d4-ad7b-42b28fb2713a',
		name: 'XPTO Ltda',
		email: 'xpto@xpto.com',
		cnpj: '99999999999991',
		created_at: new Date(),
		updated_at: new Date()
	},
	{
		uuid: 'eb21dd1d-c4d2-42b3-8c3a-17209ddcf2e3',
		name: 'Company Y Ltda',
		email: 'company@companyy.com',
		cnpj: '99999999999992',
		created_at: new Date(),
		updated_at: new Date()
	}
];

export const up: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkInsert('customer', seedCustomers);
};

export const down: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkDelete('customer', {});
};