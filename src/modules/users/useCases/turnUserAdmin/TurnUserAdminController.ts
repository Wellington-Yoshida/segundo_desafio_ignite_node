import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id : string  = request.params.user_id;
      return response.send(this.turnUserAdminUseCase.execute({ user_id }));
    } catch (error) {
      response.status(404).json({ error: error.message });
    }
    
  }
}

export { TurnUserAdminController };
