<?php
$EmailTo = "sobolewkiryl@gmail.com";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// prepare email body text
$Body = "";
$Body .= "Imię: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Body, "Wiadomość od: <$Email>" , "Wiadomość: $Message");

// redirect to success page 
if ($success){
    
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactsuccess.php\">";

}
else{
    
    echo "Something gone wrong , please contact me via e-mail :)";
}
?>