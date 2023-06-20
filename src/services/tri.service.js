// clientUtils.js

export const sortClientsByName = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsByCode = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) =>
        a.code.localeCompare(b.code)
    );

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsById = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) =>
        a.idClient.localeCompare(b.idClient)
    );

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsByIPAdresses = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) => {
        const ipA = a.infos && a.infos.length > 0 ? a.infos[0].ipAdress : "";
        const ipB = b.infos && b.infos.length > 0 ? b.infos[0].ipAdress : "";

        if (typeof ipA === "string" && typeof ipB === "string") {
            return ipA.localeCompare(ipB);
        } else {
            return 0;
        }
    });

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsByVersions = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) => {
        const versionA = a.infos && a.infos.length > 0 ? a.infos[0].version : "";
        const versionB = b.infos && b.infos.length > 0 ? b.infos[0].version : "";

        if (typeof versionA === "string" && typeof versionB === "string") {
            return versionA.localeCompare(versionB);
        } else {
            return 0;
        }
    });

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsByPorts = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) => {
        const portA = a.infos && a.infos.length > 0 ? a.infos[0].port : "";
        const portB = b.infos && b.infos.length > 0 ? b.infos[0].port : "";

        if (typeof portA === "string" && typeof portB === "string") {
            return portA.localeCompare(portB);
        } else {
            return 0;
        }
    });

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};

export const sortClientsByUpdateAts = (clients, sortDirection) => {
    const sortedClients = [...clients].sort((a, b) => {
        const updateAtA = a.infos && a.infos.length > 0 ? a.infos[0].updateAt : "";
        const updateAtB = b.infos && b.infos.length > 0 ? b.infos[0].updateAt : "";

        if (typeof updateAtA === "string" && typeof updateAtB === "string") {
            return updateAtA.localeCompare(updateAtB);
        } else {
            return 0;
        }
    });

    if (sortDirection === "desc") {
        sortedClients.reverse();
    }

    return sortedClients;
};
