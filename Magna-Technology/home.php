<VirtualHost *: 80>
ServerName www.magnatechnology.com.co
Redirect permanente / https://www.magnatechnology.com.co/
VirtualHost>
<VirtualHost _default_: 443>
ServerName www.magnatechnology.com.co
DocumentRoot / usr / local / apache2 / htdocs
SSLEngine activado
. . .
</VirtualHost>