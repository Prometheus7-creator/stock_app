import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_GygnidgTz",
    ClientId: "3ddj1ok65kvrf55moindfc9r3p"
}

const pool = new CognitoUserPool(poolData);

export default pool;