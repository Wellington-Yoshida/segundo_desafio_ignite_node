import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id: string = request.params.user_id;
      return response.send(this.showUserProfileUseCase.execute({ user_id }));
    } catch(error) {
      response.status(404).json({ error: error.message });
    }
    
  }
}

export { ShowUserProfileController };
