const userTypes = `
    #User definition type
    type User {
        id: ID!
        name: String!
        email: String!
        photo: String
        createdAt: String!
        updatedAt: String!
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdateInput {
        name: String!
        email: String!
        photo: String
    }

    input UserUpdatePasswordInput {
        password: String!
    }
`;
