import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-north-1_sYO4lgO3T",
  ClientId: "44atgttl25bga3nahgbvgf54kv",
};

export default new CognitoUserPool(poolData);
