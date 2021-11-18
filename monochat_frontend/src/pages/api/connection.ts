import {HttpException, api} from 'nextkit';

// Type to be imported in the frontend
// for type-safe API routes
export type api_data = {
	type: number;
	// types are as follows:
	// 0 = account signup
	// 1 = account login
	// 2 = account search
	// 3 = account info request
	// 4 = message request

	// type = 0, account signup
	FirstName?: string;
	SurName?: string;
	username?: string;
	password?: string;
	email?: string;
	//

	// type = 1, account login

	//

	// account search stuff
	search_term?: string;
	//
};

export default api<api_data>({
	GET: async (req, res) => {
		return {type: 200};
	},
});
