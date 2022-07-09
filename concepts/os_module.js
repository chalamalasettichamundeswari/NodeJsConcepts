const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);
/* Output:
{
    uid: 502,
    gid: 20,
    username: 'chamundeswari',
    homedir: '/Users/chamundeswari',
    shell: '/bin/zsh'
 }*/
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
//Output:The System Uptime is 104582 seconds
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
/* Output:
{
  name: 'Darwin',
  release: '20.6.0',
  totalMemory: 17179869184,
  freeMem: 1060139008
}*/