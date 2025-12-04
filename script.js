//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // Validation
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  // Creating a promise
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  // Handling promise output
  votePromise
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
