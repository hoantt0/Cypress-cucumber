Feature: Creat account 

As a customer, 
I want to create account 
For becoming Myer member


@SC-CA-01 @High
Scenario: Verify behavior When Creating a new online account and join MYER one
 Given I open the create account page
 When Input "nguyenhoa.hut+test01@gmail.com" for field "Email Address"
 And Click on "Join" button
 And Input fields to create new account as below
    | Password            | First Name    | Last Name        | Mobile Number|Date of Birth| 
    | Cmc@27081992        | Hoa           | Nguyen Thi Thanh | 0438345524   | 27/08/1992  | 
 And Select text from suggestion for Address as below
    |Input text              | Select text                  |
    |1 Hanoi Way, HOCKING  WA|1 Hanoi Way, HOCKING  WA 6065 |
 And Click on "Create Account" button
 #Then Create Account successfully

      
 
