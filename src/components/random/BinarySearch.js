let binarySort1 = (arr, numb) => {
  let high = arr.length - 1;
  let low = 0;
  let mid = Math.ceil(arr.length / 2);
  
  while(arr[mid] !== numb && high !== low) {
    if(arr[mid] < numb) {
      low = mid;
      mid = Math.ceil((high - low) / 2) + low ;
    }
    if(arr[mid] > numb) {
      high = mid;
      mid = Math.ceil((high - low) / 2);
    }
  }
  if(arr.length === 0) return null;
  return mid;
};

let binarySortRecursive = (arr, numb) => {
  let mid = Math.ceil(arr.length / 2);
  console.log(numb, mid, arr);
  if(numb > arr[mid]) {
    return binarySortRecursive(arr.slice(mid), numb) + mid;
  } else if(numb < arr[mid]) {
    return binarySortRecursive(arr.slice(0, mid), numb);
  }
  return mid;
};

export default binarySort1;



// determine the middle point of the list.
// check the value at the middle index and see if higher or lower than search value
// if equal return index
// if higher we reset our low value and throw out everything below the midpoint
// then we check again (rerun the function or rerun the while loop)
// if it is lower we throw out everything above the midpoint and rerun on the lower set.arr


//trial stuff ll typed for showing set timeout alternatives
setStateAsync = newState => {
  return new Promise((resolver, rejector) => {
    this.setState(newState, resolver)
  })
}

gamePlayStepFunction = async () => {
  //1
  await this.setStateAsync(first step)
  //2
  // compute some action, get some resource etc etc something async, 
  // we can set timeout here if want etc
  await this.setStateAsync
  //3

}

playRegions = async () => {
  const playRegion = region => {
    region.play()
    return new Promise(resolve => {
      region.on('out', resolve)
    })
  }
  const regions = Object.values(this.waveSurfer.regions.list)
  for (let i = 0;i< regions.length; i++) {
    await playRegion(regions[i])
  }
}
let binarySort1 = (arr, numb) => {
  let high = arr.length - 1;
  let low = 0;
  let mid = Math.ceil(arr.length / 2);
  
  while(arr[mid] !== numb && high !== low) {
    if(arr[mid] < numb) {
      low = mid;
      mid = Math.ceil((high - low) / 2) + low ;
    }
    if(arr[mid] > numb) {
      high = mid;
      mid = Math.ceil((high - low) / 2);
    }
  }
  if(arr.length === 0) return null;
  return mid;
};

let binarySortRecursive = (arr, numb) => {
  let mid = Math.ceil(arr.length / 2);
  console.log(numb, mid, arr);
  if(numb > arr[mid]) {
    return binarySortRecursive(arr.slice(mid), numb) + mid;
  } else if(numb < arr[mid]) {
    return binarySortRecursive(arr.slice(0, mid), numb);
  }
  return mid;
};

export default binarySort1;



// determine the middle point of the list.
// check the value at the middle index and see if higher or lower than search value
// if equal return index
// if higher we reset our low value and throw out everything below the midpoint
// then we check again (rerun the function or rerun the while loop)
// if it is lower we throw out everything above the midpoint and rerun on the lower set.arr


//trial stuff ll typed for showing set timeout alternatives
setStateAsync = newState => {
  return new Promise((resolver, rejector) => {
    this.setState(newState, resolver)
  })
}

gamePlayStepFunction = async () => {
  //1
  await this.setStateAsync(first step)
  //2
  // compute some action, get some resource etc etc something async, 
  // we can set timeout here if want etc
  await this.setStateAsync
  //3

}

playRegions = async () => {
  const playRegion = region => {
    region.play()
    return new Promise(resolve => {
      region.on('out', resolve)
    })
  }
  const regions = Object.values(this.waveSurfer.regions.list)
  for (let i = 0;i< regions.length; i++) {
    await playRegion(regions[i])
  }
}
