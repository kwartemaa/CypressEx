const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
export const users = {
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        emailDesktop: faker.internet.email(),
                        emailMobile: faker.internet.email(),
                        loginNameMobile: faker.string.alphanumeric({ length: { min: 8, max: 15 } }) ,
                        loginNameDesktop:faker.string.alphanumeric({ length: { min: 8, max: 15 } }),
                        telephone: faker.phone.number(),
                        fax: faker.number.int(6),
                        company: faker.company.name(),
                        addressOne: faker.location.streetAddress(),
                        addressTwo: faker.location.streetAddress(),
                        city: faker.location.city(),
                        region: "Western Region",
                        zipCode: faker.location.zipCode(),
                        country: "Ghana",

                    }