import { ConnectorResponse } from "../../../shared/models/connector-response.interface";
import { application } from "../index";
import { Capabilities } from "../../../shared/models/capability.interface";
import { getRegisteredRoutes } from "../util/route.util";

const supertest = require("supertest");

describe("GET /capability", () => {
  it("should return available routes", async () => {
    const response = await supertest(application).get("/capability");

    const responseBody = response.body as ConnectorResponse<Capabilities>;

    if (!responseBody.response) {
      throw new Error("Response is not correctly defined.");
    }

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(responseBody).toBeDefined();

    expect(responseBody.response).toEqual(getRegisteredRoutes());
  });
});
