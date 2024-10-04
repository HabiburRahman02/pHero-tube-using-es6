function getTime(time) {
    const hours = parseInt(time / 3600);
    const remaining = time % 3600
    const minute = parseInt(remaining / 60)
    const remainingSecond = remaining % 60
    return `${hours}h ${minute}m ${remainingSecond}s`
};