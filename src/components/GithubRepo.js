import React, { useEffect } from 'react';

const getRepositories = setRepositories => fetch('https://api.github.com/users/VanessaNiculae/repos')
    .then(response => response.json())
    .then(setRepositories)

const GithubRepo = () => {
    const [repositories, setRepositories] = React.useState();

    useEffect(() => {
        console.log('rep', repositories)
        getRepositories(setRepositories)
    })

    return repositories.map(repository => <div key={repository.id} className="card" style={{ cursor: 'pointer' }} onClick={() => {
        window.location.href = repository.html_url
    }}>
        <h4>{repository.name}</h4>
        <div className="state">
            <span classname="mr-4">
                <i className="fa fa-star mr-2" />
                {repository.stargazers_count}
            </span>
            <span className="mr-4">
                <i className="fa fa-code-fork mr-2" />
                {repository.forks_count}
            </span>
        </div>
    </div>
    )
}

export default GithubRepo