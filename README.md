# WeatherSafe - Saving Lives Through Weather Reports

Welcome to WeatherSafe, a unique weather application that goes beyond providing weather conditions in your city. WeatherSafe is designed with the primary goal of saving lives by allowing users to send emergency alerts to friends or authorities based on the weather conditions they select. Each weather state represents a different level of danger, and through this simple mechanism, you can quickly request assistance when you are in need.

## Technologies Used

WeatherSafe is built using the following technologies:

- **Frontend:** React, Vanilla CSS
- **Backend:** Node.js, Express, MongoDB
- **Weather Data:** External weather API from [OpenWeatherMap](https:/OpenWeatherMap.org/)

## How It Works

1. **Sign Up or Log In:** To access the life-saving features of WeatherSafe, users need to create an account or log in if they already have one.

2. **Sending Emergency Alerts:** Once you're logged in, you will be presented with a familiar weather application interface. However, the emergency alert feature is hidden for security reasons. To activate it, you must follow these steps:

   - Click on the weather conditions (e.g., Cloudy, Rainy, Storm) that best represent your current situation.
   - After selecting the appropriate weather condition, press another hidden button to send the emergency request.

3. **Emergency Alert Levels:**

   - Cloudy: Use this when something feels wrong, and you need your friends to call you.
   - Rainy: Indicate you're in trouble, and your friends should call you and come over. If you don't respond, they should call the authorities.
   - Storm: Reach out to the police for immediate assistance.

## Admin Features

If your account has administrator privileges, representing the authorities, you will have access to additional features.

1. **Admin Login:** Admins can log in using their special credentials and get redirected to the home page with extended functionality.

2. **Alerts Page:** The home page will display the weather conditions as usual, but an additional "Alerts" button will be available at the top. Clicking on this button will take the admin to the "Alerts Page."

3. **Alerts Page:** On this page, the admin can view all incoming emergency requests from users. Each alert will have the following details:

   - User's name and surname
   - Alert status: Pending, In Process, or Completed

4. **Change Alert Status:** Admins can change the status of each alert to track their progress and response. The available status options are:

   - Pending: The initial status for all alerts.
   - In Process: Marks that the alert is being handled or attended to.
   - Completed: Indicates that the emergency situation has been resolved.

5. **Delete Alerts:** Admins can also delete alerts that are no longer relevant or needed.

## CRUD Functionality

WeatherSafe operates on a standard CRUD system:

- **Create:** Users can create emergency alerts by selecting appropriate weather conditions and posting them to the database.
- **Read:** Alerts are displayed on the "Alerts Page" for admins to review and take action.
- **Update:** Admins can change the status of alerts between "Pending," "In Process," and "Completed" based on their progress.
- **Delete:** Admins can remove alerts that are no longer required.

## Future Collaborations

In the future, WeatherSafe aims to collaborate with organizations that assist women in creating escape plans from dangerous situations. By sending emergency alerts, these organizations will also receive notifications, allowing them to provide additional support to those in need.

## Styling Challenges

The development team acknowledges that styling has been a significant challenge for WeatherSafe. As the application evolves, efforts will be made to enhance the user interface and overall aesthetics to provide a seamless and visually appealing experience.

Thank you for choosing WeatherSafe! Together, we can make a difference and help create a safer community for everyone. If you have any questions or feedback, please don't hesitate to contact our support team.

Stay safe and prepared!

-The WeatherSafe Team
