const user = require('./models/user')
const { faker } = require('@faker-js/faker')

module.exports.insert = async _ => {
  try {
    const newUser = await user.create({
      name: faker.name.firstName(),
      power: faker.name.jobTitle()
    })

    return {
      statusCode: 200,
      body: JSON.stringify(newUser)
    }
  } catch (error) {
    console.error(error.stack.message)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to create a hero'
      })
    }
  }
}

module.exports.get = async ({ queryStringParameters }) => {
  try {
    const users = await user.findAll({
      where: queryStringParameters
    })

    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
  } catch (error) {
    console.error(error.stack)
    return {
      statusCode: 404,
      body: JSON.stringify([])
    }
  }
}

module.exports.delete = async ({ pathParameters: { id } }) => {
  try {
    const deletedUser = await user.destroy({
      where: { id }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `${deletedUser} rows affected`
      })
    }
  } catch (error) {
    console.error(error.stack)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Failed to delete this hero.'
      })
    }
  }
}

module.exports.put = async (event) => {
  console.log(event.body)
  try {
    const updatedUsers = await user.update({
      ...JSON.parse(event.body)
    }, { where: { id: event.pathParameters.id } })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `${updatedUsers.length} rows affected`
      })
    }
  } catch (error) {
    console.error(error.stack)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Failed to update this hero.'
      })
    }
  }
}
