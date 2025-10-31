//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const replacements = {
    camel: "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg",
    cheetah: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    elephant: "https://images.pexels.com/photos/203583/pexels-photo-203583.jpeg",
    gorilla: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
    koala: "https://images.pexels.com/photos/1755155/pexels-photo-1755155.jpeg",
    lion: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg",
    polar_bear: "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg",
    tiger: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    wolf: "https://images.pexels.com/photos/45853/wolf-wolves-forest-wildlife-45853.jpeg"
  };

  document.querySelectorAll("#animal-photos img").forEach(img => {
    const key = img.id;
    if (replacements[key]) {
      // Replace only the visual display
      img.src = replacements[key];
    }
  });
});
