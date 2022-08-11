interface Skill {
    name: string;
    check: boolean;
    level: number;
}

export interface RegistrationInformation {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    grad_year: number;
    previous_experience: boolean;
    first_experience: string;
    team_preference: string[];
    registered: string;
	change_teams: boolean;
	change_reason: string;
    // this is not stored on the server and is just used to keep
    // track of the info while we are
    validated: boolean;
    cad_skills: Array<Skill>;
	cad_fill_in: string;
    programming_skills: Array<Skill>;
	programming_fill_in: string;
}

export const cad_skills = [
	"Fusion 360",
	"Onshape",
	"SolidWorks or Inventor",
	"AutoCAD or LibreCAD",
].map((c) => {
    return {
        name: c,
        check: false,
        level: 0,
    };
});

export const programming_skills = [
    "Java",
    "JavaScript or TypeScript",
    "Rust",
    "TailwindCSS",
].map((c) => {
    return {
        name: c,
        check: false,
        level: 0,
    };
});

export const register = (
    r: any
): RegistrationInformation | string => {
    // keep an array of what the user might need to fix with their information
    let problems = [];
    // validate password, this should probably be improved
    const uppercase = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const numbers = /[0-9]/g;
    if (
        r.password.length < 8 ||
        !uppercase.test(r.password) ||
        !lowercase.test(r.password) ||
        !numbers.test(r.password)
    ) {
        problems.push(
            "Invalid password, must have at least 1 uppercase, 1 lowercase, \
					  1 number, and must be at least 8 characters in length. "
        );
    }
    // validate names
    if (r.first_name.length > 30 || r.first_name.length < 2) {
        problems.push("Invalid name, please enter a correct first name. ");
    }

    if (r.last_name.length > 30 || r.last_name.length < 2) {
        problems.push("Invalid name, please enter a correct last name. ");
    }

    // probably should add some additional checks with new Date()
    // validate grad_year
    const current_year = new Date().getUTCFullYear();
    if (r.grad_year < 2002 || r.grad_year > current_year + 5) {
        problems.push("Invalid graduation year. ");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(r.email)) {
        problems.push("Invalid Email. ");
    }

    const phonePattern = /^(([0-9]{3}))?[-.s]?([0-9]{3})[-.s]?([0-9]{4})$/;
    if (r.phone.length > 0 && !phonePattern.test(r.phone)) {
        problems.push(
            "Invalid Phone Number, please enter a valid phone number or leave blank if you have none. "
        );
    }

    if (problems.length > 0) {
        return problems.join("\n");
    }
	let teams = [];
	for (const team of r.team_preference) {
		teams.push(team.name);
	}
	r.team_preference = teams;
	if (r.change_teams && r.previous_experience && r.change_reason.length < 2) {
		problems.push("Please provide a reason for your team change.")
	}
    r.validated = true;
    return r;
};
