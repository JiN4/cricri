module.exports = {
    development: {
      dialect: "sqlite",
      storage: "./db.development.sqlite"
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:"
    },
    production: {
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       host: process.env.DB_HOSTNAME,
      dialect: 'postgres',
      use_env_variable: 'postgres://lrcpcyasjetbpt:9d9fc2504e665af46576e968559eef0548345f82076581d41e9b61852322d702@ec2-54-235-86-226.compute-1.amazonaws.com:5432/d8fd3sjsh8gebg'
    }
};
