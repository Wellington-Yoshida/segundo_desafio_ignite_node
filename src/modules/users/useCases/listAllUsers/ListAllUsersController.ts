
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request, response): Response {
    const { user_id } = request.headers;
    try {
      return response.send(this.listAllUsersUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    
  }
}

export { ListAllUsersController };
