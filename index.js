module.exports = {
	waitFor
};

async function waitFor(job) {
	while (job.done != true) { await new Promise(r => setTimeout(r, 100)); }
}

