class TodoSerializer < ActiveModel::Serializer
  attributes :id, :content, :complete
end
