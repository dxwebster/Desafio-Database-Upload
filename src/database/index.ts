import { createConnection, getConnectionOptions, Connection } from "typeorm";

export default async (name = "default"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database: "postgres://cbwvxjnhhgmtbd:cca9c4fad51f1933b9c70be6112e100c6e5d2461c0d80f289afa15918d16e403@ec2-52-1-95-247.compute-1.amazonaws.com:5432/damc4veaguffd8"
      // database:
      //   process.env.NODE_ENV === "test"
      //     ? "gostack_desafio06_tests"
      //     : defaultOptions.database,
    })
  );
};
