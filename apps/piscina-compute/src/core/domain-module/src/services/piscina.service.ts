export abstract class PiscinaService {
  abstract compute(): Promise<void>;

  abstract destroy(): Promise<void>;
}
