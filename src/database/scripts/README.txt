To download MySQL go to following link:
https://dev.mysql.com/downloads/installer/

Download web-community installer.

Once the download has finished follow prompts and install all packages ensuring that the version is 8.0.30.0 for all.

After the packages have been installed the server package needs to be configured.

To configure the MySQL Server package open the MySQL Installer program and select the reconfigure link.

Use the auto selected settings for all of the options until you reach the accounts and roles section.

For the root user select an easy to remember password such as '1234' or 'admin'.

After the password has been chosen use auto selected settings for the procceding options and finish configuration of the server package.



HOW TO LAUNCH SERVER:

Open MySQL Shell program and run the following command line code:

\connect --mysql root@localhost

This will prompt for the root users password to be entered, enter password and wait for save password prompt to display.

Select desired save state for password.



HOW TO SET UP DATABASE:

Open MySQL Workbench and select the previously started server.

Open all FP database files in MySQL Workbench and execute them in the following order:

FP-Schema, FP-Data.

