function getFollowers(userId)
{
    alert("inside"+userId);
    fetch("/followers/"+userId, {
        method: 'GET',
         //body: JSON.stringify({user: "pppppppp" }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            varResult = document.getElementById("result");
            let str='';
            for (i=0;i<res.data.followers.length;i++)
                    str=str+res.data.followers[i].followUserId;
            console.log(str);
            varResult.innerHTML = `Followers Id  is ${res.data.followers[0].userId} and ${str}`;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });
}

function getUsers() {
    alert("inside");
   // window.location.href = '/search';

}


function unFollow(userId,followUserId) {

    alert("inside");

    fetch("/followers/"+userId+"/"+followUserId, {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({userId: userId, followeruserId: followeruserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/followers/'+userId;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


}

function addFollowers(userId,followeruserId)
{
    alert("inside");

    fetch("/followers/add-follower/", {
        method: 'POST',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        body: JSON.stringify({userId: userId, followeruserId: followeruserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });

}



function deleteFollowers(userId)
{
    alert("inside");

    fetch("/followers/"+userId, {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){

            varResult = document.getElementById("result");
            varResult.innerHTML = `No Followers`;
            //window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });



}



function addMedia()
{
    alert("inside");
/*
    fetch("/media/add-media", {
        method: 'POST',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


 */
}


function deleteMedia(username,id)
{
    alert("inside"+username);
    alert("inside"+id);

    fetch("/media/"+id, {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log("Got response");
        console.log(res);// {success: true/false, data: {}, message: ""}
        window.location.reload();
        /*
        if(res.success){
            window.location.href = '/media/'+username;
            window.location.reload();
        } else {
            alert("inside else")
            alert(res.message);
            window.location.reload();
        }*/
    }).catch(err => {
        alert(err);console.log(err);
    });



}



function addComment(userId,mediaId)
{
    alert("inside"+userId);
    alert("inside"+mediaId);
/*
    fetch("/media/add-comments", {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/media/'+username;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


 */


} 

