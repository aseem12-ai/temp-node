const os=require('os')


// info about current user


const user=os.userInfo()


// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOs={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}
console.log(currentOs);