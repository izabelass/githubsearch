class GitHub {
    constructor() {
        this.client_id = '9cf2857af487c83e7001'; //config githuh oauth
        this.client_secret = '91378ac7eee84de103b64c38030b80e8e5bbd0c5'; //config githuh oauth
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
        `https://api.github.com/users/${user}
        ?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos
            ?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
            &client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile, // equals to profile:profileData
            repos
        }

    }
}