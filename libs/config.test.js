module.exports = {
  database: "ntask_test",
  username: "",
  password: "",
  logging: false,
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    sync: {
      force: true
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: "NTALK_TEST",
  jwtSession: {
    session: false
  }
};
