<div class="profile">
    <div class="profile-details">
      {{ $frontmatter.date }}
    </div>
</div>

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

  <style>
    .profile {
      display: flex;
      align-items: center;
      gap: 14px;
      font-family: Arial, sans-serif;
    }
    .profile img {
      border-radius: 50%;
      width: 60px; /* Adjust size as needed */
      height: 60px; /* Adjust size as needed */
    }
    .profile-details {
      font-size: 14px;
    }
    .profile-details p {
      margin: 0;
    }
  </style>

  <hr class="solid">
  <div class="profile">
    <img src="./giseldo.png" alt="Profile Picture" />
    <div class="profile-details">
      <p>Giseldo Neo</p>
      <p> <a href=http://x.com/giseldoneo>@giseldoneo</a> </p>
    </div>
  </div>
  <hr class="solid">