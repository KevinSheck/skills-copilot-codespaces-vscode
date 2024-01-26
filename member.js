function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegExp = /^[a-zA-Z0-9]+$/;
    if(member == "")
    {
        memberError.innerHTML = "Member is required";
        return false;
    }
    else if(!memberRegExp.test(member))
    {
        memberError.innerHTML = "Member is invalid";
        return false;
    }
    else
    {
        memberError.innerHTML = "";
        return true;
    }
}