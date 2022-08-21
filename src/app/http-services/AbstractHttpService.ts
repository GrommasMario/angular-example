import {environment} from "../../environments/environment";

export abstract class AbstractHttpService {
  protected mockIsOn = environment.mockEnable;
}
