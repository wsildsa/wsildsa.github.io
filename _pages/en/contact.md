---
lang-ref: contact
title: Contact
description: 
---

## WSILDSA Chapter Contact
If you would like to contact the WSILDSA chapter leadership, use the following email.

<p class="email">
  <button id="email_btn" onclick="SEmail()"><a href="#">Show Chapter Email</a></button>
  <span id="email" style="display:none"><a id="email_str" href="mailto:">Email link</a></span>
</p>

## Human Grievance Officer Contact
WSILDSA has adopted the DSA national Resolution 33 to establish a grievance program.  To report any issues encountered with other chapter members such as sexual harassment, send an email to the HGOs below.  This inbox is only viewed by elected HGOs.

<p class="hgo_email">
  <button id="hgo_email_btn" onclick="HGOSEmail()"><a href="#">Show HGO Email</a></button>
  <span id="hgo_email" style="display:none"><a id="hgo_email_str" href="mailto:">Email link</a></span>
</p>

For more information on DSA's harassment policy or to escalate an issue to national, [click here](https://www.dsausa.org/resources/harassment-and-grievance/).

<script>
function DecryptEmail(cipher)
{
    var plain = "";
    for (c of cipher ) {
        var v = c ^ 0x41;
        v = v + 11;
        plain += String.fromCharCode(v);
    }
    return plain;
}

function EncryptEmail(plain)
{
    var cipher = "";
    for (c of plain) {
        var v = c.charCodeAt(0) - 11;
        v = v ^ 0x41;
        cipher += String.fromCharCode(v);
    }
    return cipher;
}

function PrintCipher(cipher)
{
    var result = "[";
    for (c of cipher) {
        var v = c.charCodeAt(0);
        result += `${v}, `; 
    }
    result += "]";
    console.log(result);
}

function SEmail() {
    //var cipher = EncryptEmail("example@example.com");
    //PrintCipher(cipher);
  
    var cipher = [45, 27, 41, 40, 41, 43, 22, 43, 38, 22, 41, 31, 32, 24, 41, 23, 116, 36, 38, 37, 40, 37, 34, 35, 23, 31, 32, 98, 25, 37, 35];
    var x = document.getElementById("email");
    var email_str = document.getElementById("email_str");
    var button = document.getElementById("email_btn");

    x.style.display = 'block';
    var email_plain = DecryptEmail(cipher);
    email_str.href = "mailto:" + email_plain;
    email_str.textContent = email_plain;
    button.remove();
}

function HGOSEmail() {
    var cipher = [45, 41, 31, 32, 24, 41, 23, 98, 28, 29, 37, 116, 36, 38, 37, 40, 37, 34, 35, 23, 31, 32, 98, 25, 37, 35];
    var x = document.getElementById('hgo_email');
    var email_str = document.getElementById('hgo_email_str');
    var button = document.getElementById("hgo_email_btn");

    x.style.display = 'block';
    var email_plain = DecryptEmail(cipher);
    email_str.href = "mailto:" + email_plain;
    email_str.textContent = email_plain;
    button.remove();
}
</script>
