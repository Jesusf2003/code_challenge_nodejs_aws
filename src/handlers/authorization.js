const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    console.log("Authorizer name: ", event.functionName)
    const token = event.authorizationToken;
    if (token === '12345') {
        const policy = generateAllowPolicy();
        return policy;
    } else {
        const policy = generateDenyPolicy();
        return policy;
    }
};

function generateAllowPolicy() {
    const authResponse = {
        principalId: 'user',
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: 'Allow',
                    Resource: '*'
                }
            ]
        }
    }
    return authResponse;
}

function generateDenyPolicy() {
    const authResponse = {
        principalId: 'user',
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: 'Deny',
                    Resource: '*'
                }
            ]
        }
    }
    return authResponse;
}