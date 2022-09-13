class GitHub {
    constructor() {
        this.client_id = ''; //config githuh oauth
        this.client_secret = ''; //config githuh oauth
    }

    async getUser(user) {
        const profileResponse = await fetch(
        `https://api.github.com/users/${user}
        ?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();

        return {
            profile // equals to profile:profileData
        }

    }
}