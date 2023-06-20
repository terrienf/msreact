export const sortClients = (clients, sortDirection, setSortDirection, sortBy) => {
    const sortedClients = [...clients].sort((a, b) =>
        getValue(a, sortBy).localeCompare(getValue(b, sortBy))
    );

    if (sortDirection === "desc") {
        sortedClients.reverse();
        setSortDirection("asc");
    } else {
        setSortDirection("desc");
    }

    return sortedClients;
};

const getValue = (client, sortBy) => {
    switch (sortBy) {
        case "name":
            return client.name;
        case "code":
            return client.code;
        case "idClient":
            return client.idClient;
        case "ipAdress":
            return client.infos && client.infos.length > 0 ? client.infos[0].ipAdress : "";
        case "version":
            return client.infos && client.infos.length > 0 ? client.infos[0].version : "";
        case "port":
            return client.infos && client.infos.length > 0 ? client.infos[0].port : "";
        case "updateAt":
            return client.infos && client.infos.length > 0 ? client.infos[0].updateAt : "";
        default:
            return "";
    }
};
