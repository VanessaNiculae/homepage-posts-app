import jquery from 'jquery';
import React from 'react'
import $ from 'jquery';

const GithubRepo = () => {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/VanessaNiculae/repos',
        true)
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        var statusHTML = '';
        $.each(data, function (i, status) {
            statusHTML += '<div class="card"> \
                <a href=""> \
                    <h4>' + status.name + '</h4> \
                    <div class="state"> \
                        <span class="mr-4"><i class="fa fa-star mr-2"></i>' + status.stargazers_count + '</span> \
                        <span class="mr-4"><i class="fa fa-code-fork mr-2"></i>' + status.forks_count + '</span> \
                    </div> \
                </a> \
            </div>';
        });
        $('.repositories').html(statusHTML);
    }
    request.send();
}

export default GithubRepo;